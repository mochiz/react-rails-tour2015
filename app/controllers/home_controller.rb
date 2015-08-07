class HomeController < ApplicationController
  def index
    @data = [
             { stage: 1, name: 'Rohan DENNIS', avatar_url: 'http://www.letour.fr/PHOTOS/TDF/2015/RIDERS/63.jpg' },
             { stage: 2, name: 'André GREIPEL', avatar_url: 'http://www.letour.fr/PHOTOS/TDF/2015/RIDERS/75.jpg' },
            ]
  end
end
