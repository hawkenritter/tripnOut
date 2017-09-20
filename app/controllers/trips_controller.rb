class TripsController < ApplicationController

  def index
    @trips = Trip.all
    render json: @trips, status: :ok
  end

  def create
    @trip = Trip.new(trip_params).first

    @trip.save
    render json: @trip, status: :created
  end

  def destroy
    @trip = Trip.where(id: params[:id]).first

    if @trip.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private
    def trip_params
      params.require(:trip).permit(:first_name, :last_name, :email)
    end
end