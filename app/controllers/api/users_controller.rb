class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password', 'firstName', 'lastName', 'title', 'photo']

  def index 
    @users = User.all 
    render :index
  end
  
  def show
    @user = User.find(params[:id])
    render :show
  end
  
  def create
    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      render :show
    else 
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else  
        render json: {errors:@user.errors.full_messages},status: 422
    end
  end


  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :title, :email, :password, :photo)
  end
end
