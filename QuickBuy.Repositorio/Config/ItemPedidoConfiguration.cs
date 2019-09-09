using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class ItemPedidoConfiguration : IEntityTypeConfiguration<ItemPedido>
    {
        public void Configure(EntityTypeBuilder<ItemPedido> builder)
        {
            builder.HasKey(i => i.Id);
            //Builder ultiliza o padrão Fluent
            builder
                .Property(i => i.ProdutoId)
                .IsRequired();
            builder
                .Property(i => i.Quantidade)
                .IsRequired();

            builder.HasOne(i => i.Produto);

        }
    }
}
