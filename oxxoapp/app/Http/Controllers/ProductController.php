<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Product::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $producto = new Product;
        $producto->name = $request->input('name');
        $producto->price = $request->input('price');
        $producto->quantity = $request->input('quantity');

        //Para guardar el archivo de imagen
        if($request->hasFile('image')){
            $image = $request->file('image');
            $path = storage_path().'/images/products/';
            $fileName = uniqid().$image->getClientOriginalName();
            $image->move($path,$fileName);
            //Para guardar la referencia la imagen
            $producto->image = $fileName;

            if($producto->save()){
                return response()->json(['status'=>201]);
            }else{
                return response()->json(['status'=>401]);
            }
        }

        if($producto->save()){
            return response()->json(['status'=>201]);
        }else{
            return response()->json(['status'=>401]);
        }
        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::where('id',$id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $producto = Product::find($id);
        if (!$producto) {
             return response()->json(['status'=>201],404);
        }

        $producto->name = $request->input('name');
        $producto->price = $request->input('price');
        $producto->quantity = $request->input('quantity');


        //Para guardar el archivo de imagen
        if($request->hasFile('image')){
            $image = $request->file('image');
            $path = storage_path().'/images/products/';
            $fileName = uniqid().$image->getClientOriginalName();
            $image->move($path,$fileName);
            //Para guardar la referencia la imagen
            $producto->image = $fileName;

            if($producto->save()){
                return response()->json(['status'=>201]);
            }else{
                return response()->json(['status'=>401]);
            }
        }

        if($producto->save()){
            return response()->json(['status'=>201]);
        }else{
            return response()->json(['status'=>401]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Product::destroy($id)){
            return response()->json(['status'=>401],200);
        }else{
            return response()->json(['status'=>410],400);
        }
    }


}
