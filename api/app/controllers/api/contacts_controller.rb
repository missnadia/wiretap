class Api::ContactsController < ApplicationController
    before_action :set_contact, only: [:show, :update, :destroy]

    def index
        render json: Contact.all
    end

    def create
        contact = Contact.new(contact_params)
        if contact.save
            render json: contact
        else
            render json: { message: contact.errors }, status: 400
        end
    end

    def show
        render json: @contact
    end

    def update
        if @contact.update(contact_params)
            render json: @contact
        else 
            render json: { message: contact.errors }, status: 400
        end
    end

    def destroy
        if @contact.destroy
            render json: { message: "Successfully destroyed" }, status: 204
        else
            render json: { message: 'Unable to delete contact' }, status: 400
        end
    end

    private

    def set_contact
        @contact = Contact.find_by(id: params[:id])
    end

    def contact_params
        params.permit(
            :first_name,
            :last_name,
            :email,
            :mobile,
            :work,
            :home,
            :fax,
            :home_address,
            :work_address
        )
    end
end