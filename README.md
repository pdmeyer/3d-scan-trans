# 3d-scan-trans
animate OBJ 3d models with OpenGL in Max

this patch can be used to create animated compositions from OBJ 3d model files. the core of this patch is the WARP, section, which makes use of an OpenGL shader (warp1-2.jxs) to allow the user to manipulate the positions of the OBJ file's vertices. 

includes modulation matrix and several modulation sources:
* lfo
* variant of the [bfg lfo](https://github.com/pdmeyer/bfg-lfo)
* json file, formatted like the "covid_means.json" file included in this package. this contains time series audio descriptor data. to create files like these, use [time-series-audio-data](https://github.com/pdmeyer/time-series-audio-data)

also includes an implementation of max's qlist for cue-based composition

uses the jit.mo external, which can be installed using the max package manager


