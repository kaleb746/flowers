import "../styles/flowers.css";

export default function Flowers() {
  return (
    <div className="flowerStage">
      {/* fondo night (el tuyo) */}
      <div className="night" />

      {/* flores */}
      <div className="flowers">
        {/* LUCECITAS */}
        <div className="flower__light flower__light--1" />
        <div className="flower__light flower__light--2" />
        <div className="flower__light flower__light--3" />
        <div className="flower__light flower__light--4" />
        <div className="flower__light flower__light--5" />
        <div className="flower__light flower__light--6" />
        <div className="flower__light flower__light--7" />
        <div className="flower__light flower__light--8" />

        {/* FLOWER 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1" />
            <div className="flower__leaf flower__leaf--2" />
            <div className="flower__leaf flower__leaf--3" />
            <div className="flower__leaf flower__leaf--4" />
            <div className="flower__white-circle" />
          </div>

          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1" />
            <div className="flower__line__leaf flower__line__leaf--2" />
            <div className="flower__line__leaf flower__line__leaf--3" />
            <div className="flower__line__leaf flower__line__leaf--4" />
            <div className="flower__line__leaf flower__line__leaf--5" />
            <div className="flower__line__leaf flower__line__leaf--6" />
          </div>
        </div>

        {/* FLOWER 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1" />
            <div className="flower__leaf flower__leaf--2" />
            <div className="flower__leaf flower__leaf--3" />
            <div className="flower__leaf flower__leaf--4" />
            <div className="flower__white-circle" />
          </div>

          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1" />
            <div className="flower__line__leaf flower__line__leaf--2" />
            <div className="flower__line__leaf flower__line__leaf--3" />
            <div className="flower__line__leaf flower__line__leaf--4" />
          </div>
        </div>

        {/* FLOWER 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1" />
            <div className="flower__leaf flower__leaf--2" />
            <div className="flower__leaf flower__leaf--3" />
            <div className="flower__leaf flower__leaf--4" />
            <div className="flower__white-circle" />
          </div>

          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1" />
            <div className="flower__line__leaf flower__line__leaf--2" />
            <div className="flower__line__leaf flower__line__leaf--3" />
            <div className="flower__line__leaf flower__line__leaf--4" />
          </div>
        </div>

        {/* pastos/hojas extra que trae tu CSS */}
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top" />
          <div className="flower__grass--bottom" />
          <div className="flower__grass__leaf flower__grass__leaf--1" />
          <div className="flower__grass__leaf flower__grass__leaf--2" />
          <div className="flower__grass__leaf flower__grass__leaf--3" />
          <div className="flower__grass__leaf flower__grass__leaf--4" />
          <div className="flower__grass__leaf flower__grass__leaf--5" />
          <div className="flower__grass__leaf flower__grass__leaf--6" />
          <div className="flower__grass__leaf flower__grass__leaf--7" />
          <div className="flower__grass__leaf flower__grass__leaf--8" />
          <div className="flower__grass__overlay" />
        </div>

        <div className="flower__grass flower__grass--2">
          <div className="flower__grass--top" />
          <div className="flower__grass--bottom" />
          <div className="flower__grass__leaf flower__grass__leaf--1" />
          <div className="flower__grass__leaf flower__grass__leaf--2" />
          <div className="flower__grass__leaf flower__grass__leaf--3" />
          <div className="flower__grass__leaf flower__grass__leaf--4" />
          <div className="flower__grass__leaf flower__grass__leaf--5" />
          <div className="flower__grass__leaf flower__grass__leaf--6" />
          <div className="flower__grass__leaf flower__grass__leaf--7" />
          <div className="flower__grass__leaf flower__grass__leaf--8" />
          <div className="flower__grass__overlay" />
        </div>

        {/* largos laterales (como referencia) */}
        <div className="long-g long-g--1">
          <div className="leaf leaf--0" />
          <div className="leaf leaf--1" />
          <div className="leaf leaf--2" />
          <div className="leaf leaf--3" />
        </div>
        <div className="long-g long-g--5">
          <div className="leaf leaf--0" />
          <div className="leaf leaf--1" />
          <div className="leaf leaf--2" />
          <div className="leaf leaf--3" />
        </div>
      </div>
    </div>
  );
}
