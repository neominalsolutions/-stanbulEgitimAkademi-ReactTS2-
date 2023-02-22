// Button isminde bu dosyayı dışarı çıkarıcam demek

/* public class Button{
   public string name {get;set;}
}
*/

// buttona ait property tanım
export type ButtonProps = {
  name: string; // ? yok ise required propety demek
  color?: string; // bu property boş geçilebilir
  bgColor?: string;
  onClicked?(): void; // union type birleşik tip
  // bu component için kendi eventimi tanımladık
  onMouseOut?(): void; // event
};
// props ile component içerisine dışarıdan başka bir componentten attribute ismi olarak değer geçebiliriz
// props ile component özelleştirme yapılabilir.
export default function Button({
  color = "red",
  bgColor = "rgb(125,124,56)",
  name = "btn",
  onClicked,
  onMouseOut,
}: ButtonProps) {
  // arayüzde gösterilecek olan kısmı ifade eder.

  const props = { color, bgColor, name, onClicked, onMouseOut };

  // function click olduğunda tetiklenecek olan function yazdık
  // arrow function
  const click = (): void => {
    // ben bu componente click eventi çalıştırdığım da bu click eventi trigger et yani tetikle ben tetikle işlemi yakalayıp mesajı başka bir componente vericem.

    // c# da nasıl class içerisinde event fırlatıyorsak
    // public productPriceChanged event EventHandler
    // productPriceChanged.invoke();
    // optional function çağırma şekli
    props.onClicked?.();
  };

  // default function
  function click2() {
    alert("clicked2");
  }

  return (
    <div>
      {/* <button>Button 1</button> */}
      {/* setter işlemi */}
      {/*  {} jsx dosyasında dinamik değişkene bağlı değerleri göstermek için kullanılır interpolation diyoruz. model binding işlemini interpolation yöntemi ile yapıyoruz.       */}
      <button
        onMouseLeave={() => props.onMouseOut?.()}
        onClick={click} // event bağlamış olduk
        style={{ color: props.color, backgroundColor: props.bgColor }}
      >
        {props.name}
      </button>
    </div>
  );
}
