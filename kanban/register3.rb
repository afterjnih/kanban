#!/usr/local/bin/ruby

require "cgi"
require "json"

print "Content-Type: application/x-www-form-urlencoded\n"

# 改行のみでヘッダの終了
print "\n"

c = CGI.new
text01 = c["name"]
text02 = c["email"]
text03 = c["taskName"]
text04 = c["estimatedStartTime"]
text05 = c["estimatedFinishTime"]
text06 = c["startTime"]
text07 = c["finishTime"]
text08 = c["fileName"]
text09 = c["filePath"]
text10 = c["status"]


if ENV['REQUEST_METHOD'] == "POST" then


  json_data = {
    :taskName => text03,
    :estimatedStartTime => text04,
    :estimatedFinishTime => text05,
    :startTime => text06,
    :finishTime => text07,
    :fileName => text08,
    :filePath => text09,
    :status => text10
  }

  json_str = JSON.generate(json_data)
  #下の変換ではjsonデータに変換されない
  json_data.to_json

open("content.dat","r+") do |f|
  content = f.read
  content[-2,2]=",\n"
  content.concat(json_str + "\n]")
  f.rewind
  f.write(content)
end

#f = open("content.dat","a")
##f = open("C:/Users/Koji/Dropbox/kanban/content.dat","a")
#
#f.puts(json_str)
##f.puts(json_data)
#f.close

	# 標準入力からパラメータを取得する
	query = STDIN.read(ENV['CONTENT_LENGTH'].to_i)

	p c
	print text01
	print text02
  print text03
  print text04
  print text05
  print text06
  print text07
  print text08
  print text09
  print text10

	p "あああ"
    print "rubyエグゼ"


end


