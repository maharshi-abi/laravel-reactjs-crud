<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Post;

class APIController extends Controller
{
    public function postList()
    {
      try{
        $getAllPost = Post::orderBy('id','desc')->get();

        return response()->json([
            'value'  => $getAllPost,
            'status' => 'success',
            'message' => 'Post Listed Successfully !!'
            ]);

    }catch (\Exception $e){
        return [
        'value'  => [],
        'status' => 'error',
        'message'   => $e->getMessage()

        ];
    }
}

    public function createPost(Request $request)
    {
        try{
            $data = [
                'image' => $request->image,
                'title' => $request->title,
                'description' => $request->description,
            ];

            $postData = Post::create($data);

            return response()->json([
                'value'  => $postData,
                'status' => 'success',
                'message' => 'Post Added Successfully !!'
            ]);
        }catch (\Exception $e){
            return [
                'value'  => [],
                'status' => 'error',
                'message'   => $e->getMessage()

            ];
        }
    }

    public function removePost(Request $request)
    {
        try{
            $removePost = $request->id;
            $getAllPost = Post::find($removePost);
            if($getAllPost){
                $getAllPost->delete();
            }
            return response()->json([
                'value'  => [],
                'status' => 'success',
                'message' => 'Post Removed Successfully !!'
            ]);

        }catch (\Exception $e){
            return [
                'value'  => [],
                'status' => 'error',
                'message'   => $e->getMessage()

            ];
        }
    }

    public function postDetail(Request $request)
    {
        try{
            $postID = $request->id;
            $getPostData = Post::find($postID);
            return response()->json([
                'value'  => $getPostData,
                'status' => 'success',
                'message' => 'Post Removed Successfully !!'
            ]);

        }catch (\Exception $e){
            return [
                'value'  => [],
                'status' => 'error',
                'message'   => $e->getMessage()

            ];
        }
    }

}
