
//Phy
//Speed/Velocity
function spd(){    
    // let pi = 3.141592;
    var s, d, t;    
    s = div(d,t);
    return s;
}

//Acceleration
function acc(){
    var a, s1, s2, t;
    a = div(sub(s1,s2),t);
    return a;    
}

//Momentum
function momen(){
    var p, m, v;
    p = mul(m,v);
    return p;
}

//Centripital Force
function centri(){
    var fbasec, m, v, r;
    fbasec = div(mul(m,sqr(v)),r);
    return fbasec;
}

//Kinetic Energy
function kinetic(){
    var K,m,v;
    K = 0.5*mul(m,sqr(v));
    return K;
}

//Gravitational Force
function gravif(){

    let g = mul(6.673,div(10,pow(-11)));
    var F, m1, m2, r;
    F = mul(g,div(mul(m1,m2),sqr(r)));
    return F;
}

//Potential Energy
function potential(){
    let M = mul(3.986,pow(10,14));
    var U, g, m, r;
    U = div(mul(g,M,m),r);
    return U;
}

//gravitational Acceleration
function gacc(){
    let G = mul(6.673,div(10,pow(-11)));
    let M = mul(3.986,pow(10,14));
    let R = pow(6.38,pow(10,6));
    var g, G, M, R;
    g = div(mul(G,M),sqr(R));
    return g;
}

//Surface Tension
function surten(){
    var S, F, l;
    S = div(F,l);
    return S;
}

//Frequency
function freq(){
    var lam, t;
    lam = div(1,t);
    return lam;
}

//Capacitance
function capacitance(){
    var C, q, V;
    C = div(q,V);
    return C;
}

//Chem
//De-Broglie's
function debrog(){
    let h = mul(6.626,pow(10,-34));
    var lam, m, c;
    lam = div(h,mul(m,c));
    return lam;
}

//Atomic Structure
function atmstruct(){
    let h = mul(6.626,pow(10,-34));
    var E,v;
    E = mul(h,v);
    return E;
}

module.exports = {
    spd,
    acc,
    momen,
    centri,
    kinetic,
    gravif,
    potential,
    gacc,
    surten,
    freq,
    capacitance,
    debrog,
    atmstruct
}