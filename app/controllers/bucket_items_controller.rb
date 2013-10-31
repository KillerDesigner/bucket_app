class BucketItemsController < ApplicationController
  def index
  	@bucket_items = BucketItem.all
  	@bucket_item = BucketItem.new

  	respond_to do |format|
  	  format.html
  	  format.json { render :json => @bucket_items }
  	end
  end

  def create
  	@bucket_item = BucketItem.create(params[:bucket_item]) 	
  	render :json => @bucket_item
  end

  def update
  	@bucket_item = BucketItem.find(params[:id])
  	@bucket_item.update_attributes(params[:bucket_item])
  	render :nothing => true, status: 200
  end

  def destroy
  	BucketItem.delete(params[:id])
  	render :nothing => true, status: 200
  end
end
