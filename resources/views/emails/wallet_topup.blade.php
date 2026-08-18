<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a; color: #f8fafc; margin: 0; padding: 40px 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 16px; border: 1px solid #334155; padding: 32px; }
        .brand { font-size: 22px; font-weight: 900; color: #38bdf8; text-transform: uppercase; letter-spacing: 1px; }
        .badge { display: inline-block; padding: 6px 12px; background-color: #059669; color: #ffffff; font-size: 11px; font-weight: 800; border-radius: 6px; text-transform: uppercase; margin-top: 15px; }
        .card { background-color: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 20px; margin: 24px 0; }
        .amount { font-size: 28px; font-weight: 900; color: #34d399; }
        .meta-row { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px; color: #cbd5e1; }
        .footer { border-top: 1px solid #334155; padding-top: 20px; margin-top: 30px; font-size: 11px; color: #94a3b8; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="brand">VOLTORIA.AI</div>
        <div class="badge">&bull; Wallet Top-Up Confirmed</div>

        <h2 style="color: #ffffff; margin-top: 20px;">Wallet Top-Up Successful</h2>
        <p style="font-size: 14px; color: #cbd5e1;">Dear {{ $user->name }},</p>
        <p style="font-size: 14px; color: #cbd5e1;">
            Your profile wallet balance has been successfully credited with <strong>€{{ number_format($payment->amount, 2) }} EUR</strong>. An official B2B PDF tax invoice is attached to this email.
        </p>

        <div class="card">
            <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; font-weight: 700;">Top-Up Credit Amount</div>
            <div class="amount">€{{ number_format($payment->amount, 2) }} EUR</div>
            
            <hr style="border: 0; border-top: 1px solid #334155; margin: 15px 0;">

            <div className="meta-row">
                <span>Invoice Reference:</span>
                <strong style="color: #60a5fa;">{{ $payment->gateway_reference }}</strong>
            </div>
            <div className="meta-row">
                <span>New Profile Wallet Balance:</span>
                <strong style="color: #34d399;">€{{ number_format($user->balance, 2) }} EUR</strong>
            </div>
            <div className="meta-row">
                <span>Date:</span>
                <strong style="color: #ffffff;">{{ $payment->created_at->format('F d, Y H:i T') }}</strong>
            </div>
        </div>

        <p style="font-size: 13px; color: #94a3b8;">
            Funds in your wallet balance are automatically used to unlock and generate 6-page institutional investment memorandums.
        </p>

        <div class="footer">
            © 2026 INCHWARD LIMITED (Company No. 16021412). Operating Voltoria AI.<br>
            Registered Office: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, UK, CF31 1JF.
        </div>
    </div>
</body>
</html>
