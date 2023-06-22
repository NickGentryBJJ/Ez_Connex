class Api::PostsController < ApplicationController

  def index 
    @posts = Post.all 
    render json: @posts
  end

  def show
      @post = Post.find(params[:id])
      render json: @post
  end

  def create
    @post = Post.new(post_params)
    if @post.save 
      render json: @post
      
    else
      render json: {errors:@post.errors.full_messages}, status: 422
    end
  end


  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end

  private 


  def post_params
    params.require(:post).permit(:body, :author_id)
  end

end

