// GET /api/health  ->  which payment settings the live function can see. Yes/no only, never the values.
import { json } from "./_lib.js";

const has = (name) => Boolean((process.env[name] || "").trim());

export function GET() {
  return json({
    environment: process.env.VERCEL_ENV || "unknown",
    bachsSecretKey: has("BACHS_SECRET_KEY"),
    bachsWebhookSecret: has("BACHS_WEBHOOK_SECRET"),
    googleServiceAccount: has("GOOGLE_SERVICE_ACCOUNT_JSON"),
    driveFolderFull: has("DRIVE_FOLDER_FULL"),
    driveFolderExcel: has("DRIVE_FOLDER_EXCEL"),
    resendApiKey: has("RESEND_API_KEY"),
    whatsappGroupLink: has("WHATSAPP_GROUP_LINK"),
    launchEndsOn: has("LAUNCH_ENDS_ON") ? process.env.LAUNCH_ENDS_ON.trim() : null,
  });
}
