#!/usr/local/bin/ruby

require "cgi"

print "Content-Type: application/x-www-form-urlencoded\n"

# 改行のみでヘッダの終了
print "\n"

c = CGI.new
text = c["name1"]

print text

