public class Car{
  private String model;
  private Mixin mixin;

  public Car(String model){
    this.model = model;
    mixin = new Mixin();
  }

  public void driveForward(){
    mixin.driveForward();
  }
}
