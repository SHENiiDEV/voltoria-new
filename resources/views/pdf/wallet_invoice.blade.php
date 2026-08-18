<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Invoice {{ $payment->gateway_reference }} — INCHWARD LIMITED</title>
    <style>
        @page {
            margin: 40px 45px;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #0f172a;
            line-height: 1.5;
            font-size: 11.5px;
            background: #ffffff;
        }
        .header-table {
            width: 100%;
            border-bottom: 2px solid #0f172a;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .brand-title {
            font-size: 24px;
            font-weight: 900;
            color: #0f172a;
            letter-spacing: -0.5px;
            margin: 0;
            text-transform: uppercase;
        }
        .brand-subtitle {
            font-size: 10px;
            color: #64748b;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 1px;
        }
        .invoice-badge {
            font-size: 18px;
            font-weight: 900;
            color: #0f172a;
            text-align: right;
            text-transform: uppercase;
        }
        .status-stamp {
            display: inline-block;
            padding: 4px 12px;
            background: #dcfce7;
            border: 1px solid #86efac;
            color: #166534;
            font-weight: 800;
            font-size: 10px;
            border-radius: 4px;
            text-transform: uppercase;
            margin-top: 5px;
        }
        .details-table {
            width: 100%;
            margin-bottom: 30px;
        }
        .details-table td {
            vertical-align: top;
            width: 50%;
            font-size: 11px;
        }
        .box-title {
            font-weight: 800;
            font-size: 9.5px;
            text-transform: uppercase;
            color: #64748b;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }
        table.items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        table.items-table th, table.items-table td {
            border: 1px solid #cbd5e1;
            padding: 10px 12px;
            text-align: left;
            font-size: 11px;
        }
        table.items-table th {
            background-color: #0f172a;
            color: #ffffff;
            font-weight: 800;
            text-transform: uppercase;
            font-size: 9px;
            letter-spacing: 0.5px;
        }
        table.items-table tr:nth-child(even) {
            background-color: #f8fafc;
        }
        .total-box {
            width: 40%;
            margin-left: auto;
            border-collapse: collapse;
            margin-bottom: 40px;
        }
        .total-box td {
            padding: 6px 10px;
            font-size: 11px;
        }
        .total-row {
            font-weight: 900;
            font-size: 14px;
            color: #0f172a;
            border-top: 2px solid #0f172a;
        }
        .legal-footer {
            border-top: 1px solid #e2e8f0;
            padding-top: 15px;
            font-size: 9.5px;
            color: #64748b;
            line-height: 1.5;
        }
    </style>
</head>
<body>

    <table class="header-table">
        <tr>
            <td>
                <div class="brand-title">VOLTORIA AI</div>
                <div class="brand-subtitle">Automated B2B Architect &bull; INCHWARD LIMITED</div>
            </td>
            <td style="text-align: right;">
                <div class="invoice-badge">OFFICIAL RECEIPT / INVOICE</div>
                <div class="status-stamp">&bull; PAID & VERIFIED</div>
            </td>
        </tr>
    </table>

    <table class="details-table">
        <tr>
            <td>
                <div class="box-title">Merchant of Record (Issuer):</div>
                <strong>INCHWARD LIMITED</strong><br>
                Company Registration No: 16021412<br>
                Academy House, 11 Dunraven Place<br>
                Bridgend, Mid Glamorgan, CF31 1JF<br>
                United Kingdom<br>
                Email: info@voltoria.co.uk
            </td>
            <td style="padding-left: 20px;">
                <div class="box-title">Billed To (Customer):</div>
                <strong>{{ $user->name }}</strong><br>
                Email: {{ $user->email }}<br><br>
                <strong>Invoice Reference:</strong> {{ $payment->gateway_reference }}<br>
                <strong>Date of Issue:</strong> {{ $payment->created_at->format('F d, Y H:i T') }}<br>
                <strong>Payment Method:</strong> Profile Wallet Top-Up Credit
            </td>
        </tr>
    </table>

    <table class="items-table">
        <thead>
            <tr>
                <th style="width: 50%;">Description / Service Item</th>
                <th style="width: 15%; text-align: center;">Qty</th>
                <th style="width: 15%; text-align: right;">Unit Price</th>
                <th style="width: 20%; text-align: right;">Total Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <strong>Voltoria AI Profile Wallet Top-Up Credit</strong><br>
                    <span style="font-size: 9.5px; color: #64748b;">Instant credit allocation for B2B Business Plan Architect document generation.</span>
                </td>
                <td style="text-align: center;">1</td>
                <td style="text-align: right;">€{{ number_format($payment->amount, 2) }}</td>
                <td style="text-align: right; font-weight: 700;">€{{ number_format($payment->amount, 2) }}</td>
            </tr>
        </tbody>
    </table>

    <table class="total-box">
        <tr>
            <td>Subtotal:</td>
            <td style="text-align: right;">€{{ number_format($payment->amount, 2) }}</td>
        </tr>
        <tr>
            <td>VAT / Tax (0% B2B / Reverse Charge):</td>
            <td style="text-align: right;">€0.00</td>
        </tr>
        <tr class="total-row">
            <td>Total Paid:</td>
            <td style="text-align: right;">€{{ number_format($payment->amount, 2) }} EUR</td>
        </tr>
    </table>

    <div class="legal-footer">
        <strong>Corporate Verification & Merchant Notice:</strong><br>
        This official VAT / tax invoice is issued by <strong>INCHWARD LIMITED</strong> (Company Number: 16021412), registered in England & Wales at Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF. Operating Voltoria AI. All funds credited to profile wallet balances are eligible for un-utilized 14-day refund under company terms.
    </div>

</body>
</html>
