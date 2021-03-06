<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [

            "id"=> $this->id,
            "titre"=> $this->titre,
            "description"=> $this->description,
            "contenu"=> $this->contenu,
            "image"=> $this->image

        ];
    }
}
