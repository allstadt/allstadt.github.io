import glob
import os

f = open('RCS/index.md','w')
f.write("""---
layout: default
title: RCS
---

# Repeating Earthquake Activity at RCS
![multtimeline20](figures/multtimeline10.png)  
![multtimeline5](figures/multtimeline5.png)  

## Waveforms
""")
files = [os.path.basename(x) for x in glob.glob('RCS/figures/*_*png')]
for file in files:
    f.write(('[<img src="figures/%s" alt="waveform" style="width: 300px;"/>](figures/%s)') % (file,file))
    #f.write(('![%s](figures/%s)\n') % (file,file))
f.close()

f = open('RCM/index.md','w')
f.write("""---
layout: default
title: RCM
---

# Repeating Earthquake Activity at RCM
![multtimeline20](figures/multtimeline10.png)  
![multtimeline5](figures/multtimeline5.png)  

## Waveforms
""")
files = [os.path.basename(x) for x in glob.glob('RCM/figures/*_*png')]
for file in files:
    f.write(('[<img src="figures/%s" alt="waveform" style="width: 300px;"/>](figures/%s)') % (file,file))
    #f.write(('![%s](figures/%s)\n') % (file,file))
f.close()


f = open('STAR/index.md','w')
f.write("""---
layout: default
title: STAR
---

# Repeating Earthquake Activity at STAR
![multtimeline20](figures/multtimeline10.png)  
![multtimeline5](figures/multtimeline5.png)  

## Waveforms
""")
files = [os.path.basename(x) for x in glob.glob('STAR/figures/*_*png')]
for file in files:
    f.write(('[<img src="figures/%s" alt="waveform" style="width: 300px;"/>](figures/%s)') % (file,file))
    #f.write(('![%s](figures/%s)\n') % (file,file))
f.close()
