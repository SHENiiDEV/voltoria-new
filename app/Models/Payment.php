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
        if ($amount >= 6999) {
            return 'Enterprise Sovereign White-Label Suite (€6,999)';
        } elseif ($amount >= 4299) {
            return 'Institutional VC Syndicate Suite (€4,299)';
        } elseif ($amount >= 2499) {
            return 'Series A Scaleup Dossier Package (€2,499)';
        } elseif ($amount >= 1489) {
            return 'Pro Venture Institutional Memorandum (€1,489)';
        } elseif ($amount >= 989) {
            return 'Seed Growth Memorandum Package (€989)';
        }

        return 'Starter Concept Brief Package (€589)';
    }
}
