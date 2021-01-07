<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Categorie;
use App\Models\Commentaire;

class CommentaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $a = Article::find($id);
        return response()->json($a->commentaires,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request , $id)
    {
        // $c=  Commentaire::create($request->all());
        
        $commentaire=$request->input('commentaire');
        $nom=$request->input('nom');
        $email=$request->input('email');

        $c=new Commentaire;
        $c->article_id=$id;
        $c->contenucommentaire= $commentaire;
        $c->nom=$nom;
        $c->email=$email;
        $c->save();
 
        return response()->json( $c,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $c=Commentaire::where( "article_id" -> $id )->get();
        
       return response()->json( $c,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request , $article_id , $id)
    {
        $c=Commentaire::find($id);
        $c->update($request->all());
        return response()->json( $c,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy( $article_id ,  $id)
    {
        $c=Commentaire::find($id);
        $c->delete();
        return response()->json(["message" => "l'article a été supprimé" ], 200);
        // return response()->json( "l'article a été supprimé", 204); si on mit 204 on ne pourra pas affiché le message
    }
}
