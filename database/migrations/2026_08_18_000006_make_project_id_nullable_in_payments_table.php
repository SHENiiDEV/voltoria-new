<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Recreate or alter payments table in SQLite to ensure project_id is nullable.
     */
    public function up(): void
    {
        if (DB::getDriverName() === 'sqlite') {
            // Re-create SQLite table safely preserving existing data
            DB::statement('PRAGMA foreign_keys=OFF;');

            DB::statement('CREATE TABLE IF NOT EXISTS payments_new (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                user_id INTEGER NOT NULL,
                project_id INTEGER NULL,
                type VARCHAR(100) DEFAULT "generation",
                service_name VARCHAR(255) NULL,
                amount DECIMAL(10, 2) NOT NULL,
                currency VARCHAR(200) DEFAULT "EUR",
                gateway_reference VARCHAR(200) NULL,
                status VARCHAR(200) DEFAULT "pending",
                created_at DATETIME NULL,
                updated_at DATETIME NULL,
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY(project_id) REFERENCES projects(id) ON DELETE CASCADE
            );');

            // Copy existing data if old table exists
            if (Schema::hasTable('payments')) {
                DB::statement('INSERT INTO payments_new (id, user_id, project_id, amount, currency, gateway_reference, status, created_at, updated_at) 
                    SELECT id, user_id, project_id, amount, currency, gateway_reference, status, created_at, updated_at FROM payments;');
                
                DB::statement('DROP TABLE payments;');
            }

            DB::statement('ALTER TABLE payments_new RENAME TO payments;');
            DB::statement('PRAGMA foreign_keys=ON;');
        } else {
            Schema::table('payments', function (Blueprint $table) {
                $table->foreignId('project_id')->nullable()->change();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
