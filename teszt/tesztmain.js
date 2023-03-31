QUnit.module("doga teszt", function () {
  QUnit.test("Hogy tényleg function ?", function (assert) {
    assert.ok(
      typeof masodfokuEgyenletMegoldasa === "function",
      "Function tipusu"
    );
  });
  QUnit.test("1 4 4 ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(1, 4, 4),{
            "X1": -2,
            "X2": -2
          }
    );
  });
  QUnit.test("0 0 0 ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(0, 0, 0),	
        {
          "X1": NaN,
          "X2": NaN
        }
    );
  })
  QUnit.test("Negativ számokal mukodik ? ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(-1, 3, 4),{
            "X1": -1,
            "X2": 4
          }
    );
  })
  QUnit.test("2 -1 4", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(2, -1, 4),{
            "X1": NaN,
            "X2": NaN
          }
    );
  })
  QUnit.test("Tizedes jegyu érték vissza kapás (1,11,4) ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(1, 11, 4),{
            "X1": -0.376524617020201,
            "X2": -10.623475382979798
          }
    );
  })
  QUnit.test("1 0 0 tesztelés  ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(1, 0, 0),	
        {
          "X1": 0,
          "X2": 0
        }
    );
  })
  QUnit.test("0 1 2 tesztelés  ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(0, 1, 2),{
            "X1": NaN,
            "X2": -Infinity
          }
    );
  })
  QUnit.test("1 0 4 tesztelés  ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(1, 0, 4),{
            "X1": NaN,
            "X2": NaN
          }
    );
  })
  QUnit.test("2 2 -3 tesztelés  ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(2, 2, -3),{
            "X1": 0.8228756555322954,
            "X2": -1.8228756555322954
          }
    );
  })
  QUnit.test("4 4 0 tesztelés  ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(4, 4, 0),{
            "X1": 0,
            "X2": -1
          }
    );
  })
    QUnit.test("111 111 11 tesztelés  ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(111,111, 11),{
            "X1": -0.11154034842611915,
            "X2": -0.888459651573881
          }
    );
  })
  QUnit.test("0 1 0 tesztelés  ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(0,1, 0),{
            "X1": NaN,
            "X2": -Infinity
          }
    );
  })
  QUnit.test("0 0 1 tesztelés  ", function (assert) {
    assert.equal(
        masodfokuEgyenletMegoldasa(0,0, 1),{
            "X1": NaN,
            "X2": NaN
          }
    );
  })
});
