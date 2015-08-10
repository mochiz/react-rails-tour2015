class Api::V1::StageWinnersController < ApplicationController
  def index
    @winners = StageWinner.order(:stage)
    render json: @winners
  end
end
