class V1::GreetingController < ApplicationController
  def index
    render json: { greeting: [
      {
        message: 'It works',
        id: '10100dsd0'
      }
    ] }.to_json
  end
end
