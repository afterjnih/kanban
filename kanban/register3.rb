#!/usr/local/bin/ruby

require "cgi"

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

	# 標準入力からパラメータを取得する
	query = STDIN.read(ENV['CONTENT_LENGTH'].to_i)

	p c
	p text01
	p text02
  p text03
  p text04
  p text05
  p text06
  p text07
  p text08
  p text09
  p text10

	p "ruby"
    print "rubyExe"


end


