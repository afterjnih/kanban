#!/usr/local/bin/ruby

require "cgi"

print "Content-Type: application/x-www-form-urlencoded\n"

# 改行のみでヘッダの終了
print "\n"

c = CGI.new
text = c["request"]

if ENV['REQUEST_METHOD'] == "POST" then

	# 標準入力からパラメータを取得する
	query = STDIN.read(ENV['CONTENT_LENGTH'].to_i)
	
	p c
	p text
	p "ruby"
    print "rubyExe"


end


