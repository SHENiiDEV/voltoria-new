<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a; color: #f8fafc; margin: 0; padding: 40px 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 16px; border: 1px solid #334155; padding: 32px; }
        .brand { font-size: 22px; font-weight: 900; color: #38bdf8; text-transform: uppercase; letter-spacing: 1px; }
        .badge { display: inline-block; padding: 6px 12px; background-color: #4f46e5; color: #ffffff; font-size: 11px; font-weight: 800; border-radius: 6px; text-transform: uppercase; margin-top: 15px; }
        .card { background-color: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 20px; margin: 24px 0; }
        .btn { display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #6366f1 0%, #2563eb 100%); color: #ffffff; text-decoration: none; font-weight: 800; font-size: 14px; border-radius: 12px; margin-top: 15px; }
        .footer { border-top: 1px solid #334155; padding-top: 20px; margin-top: 30px; font-size: 11px; color: #94a3b8; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="brand">VOLTORIA.AI</div>
        <div class="badge">&bull; Document Payment & PDF Unlocked</div>

        <h2 style="color: #ffffff; margin-top: 20px;">Business Plan Payment Verified</h2>
        <p style="font-size: 14px; color: #cbd5e1;">Dear {{ $user->name }},</p>
        <p style="font-size: 14px; color: #cbd5e1;">
            Payment of <strong>€{{ number_format($payment->amount, 2) }} EUR</strong> for service <strong>"{{ $payment->getFormattedServiceName() }}"</strong> (Project: <strong>{{ $project->title }}</strong>) has been processed. Your official 6-page PDF export is now fully unlocked.
        </p>

        <div class="card">
            <div style="font-size: 11px; color: #38bdf8; text-transform: uppercase; font-weight: 800;">Paid Service Package</div>
            <div style="font-size: 16px; font-weight: 800; color: #ffffff; margin-top: 4px;">{{ $payment->getFormattedServiceName() }}</div>
            
            <hr style="border: 0; border-top: 1px solid #334155; margin: 15px 0;">

            <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 6px;">
                Document Title: <strong style="color: #ffffff;">{{ $project->title }}</strong>
            </div>
            <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 6px;">
                Amount Deducted/Paid: <strong style="color: #34d399;">€{{ number_format($payment->amount, 2) }} EUR</strong>
            </div>
            <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 6px;">
                Remaining Wallet Balance: <strong style="color: #60a5fa;">€{{ number_format($user->balance, 2) }} EUR</strong>
            </div>
            <div style="font-size: 13px; color: #cbd5e1;">
                Invoice Reference: <strong style="color: #94a3b8;">{{ $payment->gateway_reference }}</strong>
            </div>
        </div>

        <div style="text-align: center;">
            <a href="{{ route('projects.show', $project->id) }}" class="btn">View & Download 6-Page PDF</a>
        </div>

        <div class="footer">
            © 2026 INCHWARD LIMITED (Company No. 16021412). Operating Voltoria AI.<br>
            Registered Office: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, UK, CF31 1JF.
        </div>
    </div>
</body>
</html>
