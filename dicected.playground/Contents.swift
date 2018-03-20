//: Playground - noun: a place where people can play

import UIKit

func probabilityToHit(k : Double) -> Double {
	return Double(7 - k) / 6.0;
}

func probabilityToHitWithRerollAll(k: Double) -> Double {
	return ((7 - k) * 6 + (k - 1) * (7 - k)) / 36.0;
}

func probabilityToHitWithLimitedReroll(k: Double) -> Double {
	return ((7 - k) / 6) + ((7 - k) / 36);// + ((7 - k) / 6);
}

func prettyPrint(probability: Double) -> Void {
	print("\(String(format: "%.3f", probability))");
}

var toHit : Double = probabilityToHit(k: 3);

print("--- To Hit with reroll for all misses ---");
for diceSide in 2...6 {
	let reRollAll : Double = probabilityToHitWithRerollAll(k: Double(diceSide));
	prettyPrint(probability: reRollAll);
}

print("--- To Hit with rerolling ones ---");
for diceSide in 2...6 {
	let reRollAll : Double = probabilityToHitWithLimitedReroll(k: Double(diceSide));
	prettyPrint(probability: reRollAll);
}

