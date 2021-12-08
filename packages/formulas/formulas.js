
//Phy
//Speed/Velocity
export function spd(){    
    // let pi = 3.141592;
    var s, d, t;    
    s = div(d,t);
}

//Acceleration
export function acc(){
    var a, s1, s2, t;
    a = div(sub(s1,s2),t);    
}

//Momentum
export function momen(){
    var p, m, v;
    p = mul(m,v);
}

//Centripital Force
export function centri(){
    var fbasec, m, v, r;
    fbasec = div(mul(m,sqr(v)),r);
}

//Kinetic Energy
export function kinetic(){
    var K,m,v;
    K = 0.5*mul(m,sqr(v));
}

//Gravitational Force
export function gravif(){

    let g = mul(6.673,div(10,pow(-11)));
    var F, m1, m2, r;
    F = mul(g,div(mul(m1,m2),sqr(r)));
}

//Potential Energy
export function potential(){
    let M = mul(3.986,pow(10,14));
    var U, g, m, r;
    U = div(mul(g,M,m),r);
}

//gravitational Acceleration
export function gacc(){
    let G = mul(6.673,div(10,pow(-11)));
    let M = mul(3.986,pow(10,14));
    let R = pow(6.38,pow(10,6));
    var g, G, M, R;
    g = div(mul(G,M),sqr(R));
}

//Surface Tension
export function surten(){
    var S, F, l;
    S = div(F,l);
}

//Frequency
export function freq(){
    var lam, t;
    lam = div(1,t);
}

//Capacitance
export function capacitance(){
    var C, q, V;
    C = div(q,V);
}

//Chem
//De-Broglie's
export function debrog(){
    let h = mul(6.626,pow(10,-34));
    var lam, m, c;
    lam = div(h,mul(m,c));
}

//Atomic Structure
export function atmstruct(){
    let h = mul(6.626,pow(10,-34));
    var E,v;
    E = mul(h,v);
}

