//: Playground - noun: a place where people can play

import UIKit

func probabilityToHit(k : Double) -> Double {
	return Double(7 - k) / 6.0;
}

func probabilityToHitWithRerollAllFailed(k: Double) -> Double {
	return ((7 - k) * 6 + (k - 1) * (7 - k)) / 36.0;
}

var toHit : Double = probabilityToHit(k: 3);
var reRollAll : Double = probabilityToHitWithRerollAllFailed(k: 3);
