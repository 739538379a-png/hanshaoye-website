"use client";

import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

type LeadFormData = {
  name: string;
  phone: string;
  city: string;
  budget: string;
  privacyConsent: boolean;
};

const initialData: LeadFormData = {
  name: "",
  phone: "",
  city: "",
  budget: "",
  privacyConsent: false,
};

export function LeadForm() {
  const [data, setData] = useState(initialData);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/cooperation-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "homepage" }),
      });
      const result = (await response.json()) as { ok: boolean; message: string };
      if (!response.ok || !result.ok) throw new Error(result.message);
      setState("success");
      setMessage(result.message);
      setData(initialData);
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "提交未成功，请稍后重试。");
    }
  };

  if (state === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle size={42} weight="light" aria-hidden="true" />
        <h3>申请已提交</h3>
        <p>{message}</p>
        <button type="button" className="text-button" onClick={() => setState("idle")}>
          再次填写
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={submit} noValidate>
      <div className="field-grid">
        <label>
          <span>姓名</span>
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            value={data.name}
            onChange={(event) => setData({ ...data, name: event.target.value })}
          />
        </label>
        <label>
          <span>手机号</span>
          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            pattern="1[3-9][0-9]{9}"
            value={data.phone}
            onChange={(event) => setData({ ...data, phone: event.target.value })}
          />
        </label>
        <label>
          <span>意向城市</span>
          <input
            name="city"
            autoComplete="address-level2"
            required
            value={data.city}
            onChange={(event) => setData({ ...data, city: event.target.value })}
          />
        </label>
        <label>
          <span>预计投入预算</span>
          <input
            name="budget"
            value={data.budget}
            onChange={(event) => setData({ ...data, budget: event.target.value })}
          />
        </label>
      </div>

      <label className="consent-row">
        <input
          name="privacyConsent"
          type="checkbox"
          required
          checked={data.privacyConsent}
          onChange={(event) => setData({ ...data, privacyConsent: event.target.checked })}
        />
        <span>我同意将以上信息用于本次合作咨询与后续联系。</span>
      </label>

      {state === "error" ? (
        <p className="form-error" role="alert">
          {message}
        </p>
      ) : null}

      <button className="submit-button" type="submit" disabled={state === "loading"}>
        <span>{state === "loading" ? "正在提交" : "提交合作申请"}</span>
        <ArrowRight size={20} aria-hidden="true" />
      </button>
    </form>
  );
}
