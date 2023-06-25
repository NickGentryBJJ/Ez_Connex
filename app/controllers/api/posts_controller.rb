class Api::PostsController < ApplicationController

  def index 
    @posts = Post.includes(:user).all 
    render :index
  end

  def show
      @post = Post.find(params[:id])
      render json: @post
  end

  def create
    @posts = Post.all
    @post = Post.new(post_params)
    if @post.save 
      render :index
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
    params.require(:post).permit(:body, :user_id)
  end

end

