<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource("categories","CategorieController");

Route::get('categories/{categorie_id}/articles',['uses'=>'ArticleController@index','as'=>'pagearticle.index']);

Route::post('categories/{categorie_id}/articles',['uses'=>'ArticleController@store','as'=>'pagearticle.store']);

// Route::post('categories',['uses'=>'CategorieController@store','as'=>'page.store']);


Route::get('categories/{categorie_id}/articles/{article_id}',['uses'=>'ArticleController@show','as'=>'pagearticle.show']);

Route::put('categories/{categorie_id}/articles/{article_id}',['uses'=>'ArticleController@update','as'=>'pagearticle.update']);

Route::put('articles/{article_id}',['uses'=>'ArticleController@update1','as'=>'pagearticle.update1']);

Route::delete('articles/{article_id}',['uses'=>'ArticleController@destroy','as'=>'pagearticle.destroy']);

Route::get('articles',['uses'=>'ArticleController@articles','as'=>'pagearticle.articles']);

Route::get('articles/{article_id}',['uses'=>'ArticleController@article','as'=>'pagearticle.article']);





Route::get('messagescontact',['uses'=>'ContactController@index','as'=>'pagecontact.show']);

Route::post('messagescontact',['uses'=>'ContactController@store','as'=>'pagecontact.store']);

Route::delete('messagescontact/{id}',['uses'=>'ContactController@destroy','as'=>'pagecontact.destroy']);












// Route::apiResource("commentaires","CommentaireController");

Route::get('articles/{article_id}/commentaires',['uses'=>'CommentaireController@index','as'=>'pagecomment.index']);

Route::post('articles/{article_id}/commentaires',['uses'=>'CommentaireController@store','as'=>'pagecomment.store']);

Route::get('articles/{article_id}/commentaires/{commentaire_id}',['uses'=>'CommentaireController@show','as'=>'pagecomment.show']);

Route::put('articles/{article_id}/commentaires/{commentaire_id}',['uses'=>'CommentaireController@update','as'=>'pagecomment.update']);

Route::delete('articles/{article_id}/commentaires/{commentaire_id}',['uses'=>'CommentaireController@destroy','as'=>'pagecomment.destroy']);


Route::apiResource("contacts","ContactController");

Route::post('users',['uses'=>'AuthController@register','as'=>'pageuser.register']);

    




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
