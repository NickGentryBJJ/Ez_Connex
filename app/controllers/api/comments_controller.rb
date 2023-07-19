class Api::CommentsController < ApplicationController
  wrap_parameters include: User.attribute_names + ['postId', 'userId', 'body']


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
      @comments = Comment.all
        render :index
    else
        render json: {errors:@comment.errors.full_messages},status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      @comments = Comment.all 
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
