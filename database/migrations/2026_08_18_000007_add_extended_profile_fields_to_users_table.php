<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations adding surname, phone, DOB, address and terms acceptance to users table.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('surname', 255)->nullable()->after('name');
            $table->string('phone_number', 50)->nullable()->after('email');
            $table->date('date_of_birth')->nullable()->after('phone_number');
            $table->string('address_line1', 255)->nullable()->after('date_of_birth');
            $table->string('city', 255)->nullable()->after('address_line1');
            $table->string('country', 255)->nullable()->after('city');
            $table->string('postcode', 50)->nullable()->after('country');
            $table->timestamp('terms_accepted_at')->nullable()->after('balance');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'surname',
                'phone_number',
                'date_of_birth',
                'address_line1',
                'city',
                'country',
                'postcode',
                'terms_accepted_at',
            ]);
        });
    }
};
