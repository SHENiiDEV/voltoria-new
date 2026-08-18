<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'project_id',
        'type',
        'service_name',
        'amount',
        'currency',
        'gateway_reference',
        'status',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function getFormattedServiceName(): string
    {
        if (!empty($this->service_name)) {
            return $this->service_name;
        }

        if ($this->type === 'topup') {
            return 'Voltoria AI Profile Wallet Top-Up Credit';
        }

        $amount = (float) $this->amount;
        if ($amount >= 1499) {
            return 'Enterprise White-Label Memorandum Package (€1,499)';
        } elseif ($amount >= 499) {
            return 'Pro Venture Institutional Memorandum (€499)';
        }

        return 'Starter Business Brief Package (€149)';
    }
}
