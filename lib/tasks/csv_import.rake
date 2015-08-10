namespace :csv_import do
  desc 'CSVからステージ勝利者をインポート'
  task :stage_winner => :environment do
    StageWinnerImporter.import
  end
end
