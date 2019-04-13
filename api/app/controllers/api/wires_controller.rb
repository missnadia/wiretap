class Api::WiresController < ApplicationController
    before_action :set_wire, only: [:show, :update, :destroy]

    def index
        render json: Wire.all
    end

    def create
        wire = Wire.new(contact_params)
        if wire.save
            render json: wire
        else
            render json: { message: wire.errors }, status: 400
        end
    end

    def show
        render json: @wire
    end

    def update
        if @wire.update(contact_params)
            render json: @wire
        else 
            render json: { message: wire.errors }, status: 400
        end
    end

    def destroy
        if @wire.destroy
            render json: { message: "Successfully destroyed" }, status: 204
        else
            render json: { message: 'Unable to delete wire' }, status: 400
        end
    end

    private

    def set_wire
        @wire = Wire.find_by(id: params[:id])
    end

    def contact_params
        params.permit(
            :content,
            :contact_method,
            :private
        )
    end
end