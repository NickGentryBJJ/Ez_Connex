class Api::PostsController < ApplicationController
  wrap_parameters include: Post.attribute_names + [:photo]

  def index 
    @posts = Post.includes(:user).all 
    render :index
  end

  def show
      @post = Post.find(params[:id])
      render json: @post
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      @posts = Post.all 
        render json: :index
    else  
        render json: {errors:@post.errors.full_messages},status: 422
    end

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
    params.require(:post).permit(:body, :user_id, :photo)
  end

end

