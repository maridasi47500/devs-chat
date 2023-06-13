json.extract! message, :id, :code, :print, :created_at, :updated_at
json.url message_url(message, format: :json)
