import ButtonMenuComponent from './ButtonMenuComponent';

export default function ListMenuComponent() {
  return (
    <div className='d-flex gap-2'>
        <ButtonMenuComponent title={"Inicio"} />
        <ButtonMenuComponent title={"Productos"} />
        <ButtonMenuComponent title={"Contacto"} />
    </div>
  )
}