<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commentaires', function (Blueprint $table) {
            $table->id();
            $table->string('contenucommentaire');
            $table->string('nom');
            $table->string('email');

            $table->unsignedBigInteger('article_id');
            $table->foreign('article_id')
            ->references('id')
            ->on('articles')
            ->onDelete('restrict')
            ->onUpdate('restrict');
           
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('commentaires');
    }
}
