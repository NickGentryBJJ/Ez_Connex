class Api::CommentsController < ApplicationController
  def index 
    @comments = Comment.all 
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def create 
    @comment = Comment.new(comment_params)
    if @comment.save 
        render :index
    else
        render json: {errors:@comment.errors.full_messages},status: 422
    end
  end

  def destroy 
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  private 
  def comment_params 
      params.require(:comment).permit(:body, :post_id, :user_id)
  end
end
