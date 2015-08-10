require 'csv'

class StageWinnerImporter
  def self.import
    table = CSV.table(Rails.root.join('docs', 'stage_winners.csv'))
    table.each {|row| StageWinner.find_or_create_by(row.to_hash) }
  end
end
