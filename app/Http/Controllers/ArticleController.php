<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Categorie;
use App\Models\Commentaire;
use App\Http\Resources\ArticleResource;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $c= Categorie::find($id);
        return response()->json(ArticleResource::collection($c->articles,200));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request , $id)
    {
       


         $a= new Article;
         $a->titre=$request->input('titre');
         $a->description=$request->input('description');
         $a->contenu=$request->input('contenu');
         $a->categorie_id=$request->input('categorie_id');
      
        //  $validatedData = $request->validate([
        //     'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
   
        //    ]);
        //    $request->validate([
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);

        //    $image      =       time().'.'.$request->image->extension();

         // $request->image->move(public_path('images'), $image);
   
          // $image      =       Image::create(["image" => $image]);
        //    $path = $request->file('image')->store('public/images');



        // $image =$request->input('image');

        // $path = public_path('images/' . $image);
        // Image::make($request->input('image'))->save($path);

       // $file = $request->file('image')->store('public/images');
        

        $a->image=$request->input('image');
      
      
       
       
        
         $a->save();

        //  $a=  Article::create($request->all());
        // $r= new ArticleResource($a);
 
        return response()->json( $a,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($categorie_id,$article_id)
    {
        $a=Article::where([ "categorie_id" => $categorie_id , "id" => $article_id])->get();
        // $r= new ArticleResource($a);
        
       return response()->json( $a,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $categorie_id , $id)
    {
        $a=Article::find($id);
        $a->update($request->all());
        $r= new ArticleResource($a);
        return response()->json( $r,200);
    }

    public function update1(Request $request, $id)
    {
        $a1=Article::find($id);
        $a1->update($request->all());
        $r1= new ArticleResource($a1);
        return response()->json( $r1,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $a=Article::find($id);
        $a->delete();
        return response()->json(["message" => "l'article a été supprimé" ], 200);
        // return response()->json( "l'article a été supprimé", 204); si on mit 204 on ne pourra pas affiché le message
    }

    public function articles(){

       $a = Article::all();
        return response()->json( $a,200);
    }

    public function article($id){

        $a = Article::find($id);
         return response()->json( $a,200);
     }
}
