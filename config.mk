BUILD_DIR?=build
MINISATP_RELSYM?=-g
MINISATP_REL?=-O3 -D NDEBUG
MINISATP_DEB?=-O0 -D DEBUG 
MINISATP_PRF?=-O3 -D NDEBUG
MINISATP_FPIC?=-fpic
MINISAT_INCLUDE?=-I../minisat -D NO_GMP
MINISAT_LIB?=-L../minisat/build/release/lib -lminisat
MCL_INCLUDE?=
MCL_LIB?=
prefix?=
