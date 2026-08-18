<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations safely adding type, balance, and service_name columns if missing.
     */
    public function up(): void
    {
        if (Schema::hasTable('users') && !Schema::hasColumn('users', 'balance')) {
            Schema::table('users', function (Blueprint $table) {
                $table->decimal('balance', 10, 2)->default(0.00)->after('password');
            });
        }

        if (Schema::hasTable('payments')) {
            Schema::table('payments', function (Blueprint $table) {
                if (!Schema::hasColumn('payments', 'type')) {
                    $table->string('type', 100)->default('generation')->after('project_id');
                }
                if (!Schema::hasColumn('payments', 'service_name')) {
                    $table->string('service_name', 255)->nullable()->after('type');
                }
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('payments')) {
            Schema::table('payments', function (Blueprint $table) {
                if (Schema::hasColumn('payments', 'type')) {
                    $table->dropColumn('type');
                }
                if (Schema::hasColumn('payments', 'service_name')) {
                    $table->dropColumn('service_name');
                }
            });
        }
    }
};
