p=d=a=0
for l in open("2"):
	c,v=l.split();v=int(v);a+=((c<'f')-(c>'g'))*v
	if c[0]=='f':p+=v;d+=v*a
print(p*d)