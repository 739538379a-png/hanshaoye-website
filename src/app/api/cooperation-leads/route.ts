import { NextResponse } from "next/server";

type LeadRequest = {
  name?: unknown;
  phone?: unknown;
  city?: unknown;
  budget?: unknown;
  privacyConsent?: unknown;
  source?: unknown;
};

const phonePattern = /^1[3-9]\d{9}$/;

export async function POST(request: Request) {
  let body: LeadRequest;

  try {
    body = (await request.json()) as LeadRequest;
  } catch {
    return NextResponse.json({ ok: false, message: "请求内容无效，请检查后重试。" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const city = typeof body.city === "string" ? body.city.trim() : "";

  if (name.length < 2 || name.length > 40) {
    return NextResponse.json({ ok: false, message: "请填写正确的姓名。" }, { status: 400 });
  }

  if (!phonePattern.test(phone)) {
    return NextResponse.json({ ok: false, message: "请填写正确的手机号。" }, { status: 400 });
  }

  if (city.length < 2 || city.length > 50) {
    return NextResponse.json({ ok: false, message: "请填写意向城市。" }, { status: 400 });
  }

  if (body.privacyConsent !== true) {
    return NextResponse.json({ ok: false, message: "请先同意信息使用说明。" }, { status: 400 });
  }

  if (process.env.MOCK_LEAD_ERROR === "1") {
    return NextResponse.json(
      { ok: false, message: "提交未成功，请稍后重试或拨打 400-870-9288。" },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "我们会根据您填写的信息与您联系。",
  });
}
