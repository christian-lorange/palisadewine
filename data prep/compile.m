clear all
clc

load('table.mat')

s1='<div class=@panel panel-default connect-cat@><div class=@panel-heading collapsed@ role=@tab@ id=@heading1@ data-toggle=@collapse@ data-parent=@#accordion@ href=@#collapse1@ aria-expanded=@false@ aria-controls=@collapse1@><img class=@venue_image@ src=@'
s2='@><h4 class=@winery_title@>';
s3='</h4><p class=@city@>';
s4='</p><p class=@hours@></p><p class=@distancetext@></p></div><div id=@collapse1@ class=@panel-collapse collapse@ role=@tabpanel@ aria-labelledby=@heading1@><div class=@panel-body@><p>';
s5='</p></div></div></div>';



text=[];

for i=1:length(table(:,1))
%     char(table(i,12))
%     char(table(i,1))
%     char(table(i,3))
%     char(table(i,2))
%     char(table(i,3))
%     char(table(i,9))
%     char(table(i,10))

    x=int2str(i)
    
    s1n= strrep(s1,'1',x);
    s4n= strrep(s4,'1',x);

    temp=strcat(s1n,char(table(i,12)),s2,char(table(i,1)),s3,char(table(i,3)),s4n,'<b>Address:</b> ','&nbsp',char(table(i,2)),'&nbsp',char(table(i,3)),'<br><b>Phone:</b>','&nbsp',char(table(i,6)),'<br>',char(table(i,9)),'<br><br>',char(table(i,10)),s5)
    
    text{i,1}=temp;
    
end

text2= strrep(text,'@','"');
text3= strrep(text2,'&nbsp',{' '});

